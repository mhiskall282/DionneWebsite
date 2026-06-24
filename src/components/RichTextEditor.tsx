import { useCallback, useRef, useEffect } from "react";
import {
  Bold,
  Italic,
  Underline,
  Strikethrough,
  List,
  ListOrdered,
  AlignLeft,
  AlignCenter,
  AlignRight,
  AlignJustify,
  Heading1,
  Heading2,
  Heading3,
  Quote,
  Code,
  Link,
  Image,
  Undo,
  Redo,
  Minus,
  RemoveFormatting,
} from "lucide-react";

interface RichTextEditorProps {
  value: string;
  onChange: (html: string) => void;
  onImageInsert?: () => void;
  placeholder?: string;
}

type ToolbarButton = {
  type: "button";
  icon: React.ReactNode;
  title: string;
  command: string;
  value?: string;
} | {
  type: "separator";
};

const RichTextEditor = ({ value, onChange, onImageInsert, placeholder = "Start writing your article..." }: RichTextEditorProps) => {
  const editorRef = useRef<HTMLDivElement>(null);
  const isUpdating = useRef(false);

  // Sync external value → editor (only when not focused)
  useEffect(() => {
    if (!editorRef.current) return;
    if (document.activeElement === editorRef.current) return;
    if (editorRef.current.innerHTML !== value) {
      isUpdating.current = true;
      editorRef.current.innerHTML = value || "";
      isUpdating.current = false;
    }
  }, [value]);

  const exec = useCallback((command: string, val?: string) => {
    editorRef.current?.focus();
    document.execCommand(command, false, val);
    // Emit updated HTML
    if (editorRef.current) {
      onChange(editorRef.current.innerHTML);
    }
  }, [onChange]);

  const handleInput = useCallback(() => {
    if (isUpdating.current) return;
    if (editorRef.current) {
      onChange(editorRef.current.innerHTML);
    }
  }, [onChange]);

  const insertLink = useCallback(() => {
    const url = prompt("Enter URL:", "https://");
    if (url) exec("createLink", url);
  }, [exec]);

  const insertImage = useCallback(() => {
    if (onImageInsert) {
      onImageInsert();
    } else {
      const url = prompt("Enter image URL:");
      if (url) exec("insertImage", url);
    }
  }, [exec, onImageInsert]);

  const insertHR = useCallback(() => {
    exec("insertHTML", "<hr />");
  }, [exec]);

  const formatBlock = useCallback((tag: string) => {
    exec("formatBlock", tag);
  }, [exec]);

  const toolbarGroups: ToolbarButton[][] = [
    [
      { type: "button", icon: <Undo size={15} />, title: "Undo", command: "undo" },
      { type: "button", icon: <Redo size={15} />, title: "Redo", command: "redo" },
    ],
    [
      { type: "button", icon: <Heading1 size={15} />, title: "Heading 1", command: "formatBlock", value: "h1" },
      { type: "button", icon: <Heading2 size={15} />, title: "Heading 2", command: "formatBlock", value: "h2" },
      { type: "button", icon: <Heading3 size={15} />, title: "Heading 3", command: "formatBlock", value: "h3" },
    ],
    [
      { type: "button", icon: <Bold size={15} />, title: "Bold (Ctrl+B)", command: "bold" },
      { type: "button", icon: <Italic size={15} />, title: "Italic (Ctrl+I)", command: "italic" },
      { type: "button", icon: <Underline size={15} />, title: "Underline (Ctrl+U)", command: "underline" },
      { type: "button", icon: <Strikethrough size={15} />, title: "Strikethrough", command: "strikeThrough" },
    ],
    [
      { type: "button", icon: <AlignLeft size={15} />, title: "Align Left", command: "justifyLeft" },
      { type: "button", icon: <AlignCenter size={15} />, title: "Align Center", command: "justifyCenter" },
      { type: "button", icon: <AlignRight size={15} />, title: "Align Right", command: "justifyRight" },
      { type: "button", icon: <AlignJustify size={15} />, title: "Justify", command: "justifyFull" },
    ],
    [
      { type: "button", icon: <List size={15} />, title: "Bullet List", command: "insertUnorderedList" },
      { type: "button", icon: <ListOrdered size={15} />, title: "Numbered List", command: "insertOrderedList" },
      { type: "button", icon: <Quote size={15} />, title: "Blockquote", command: "formatBlock", value: "blockquote" },
      { type: "button", icon: <Code size={15} />, title: "Code Block", command: "formatBlock", value: "pre" },
    ],
    [
      { type: "button", icon: <Link size={15} />, title: "Insert Link", command: "__link" },
      { type: "button", icon: <Image size={15} />, title: "Insert Image", command: "__image" },
      { type: "button", icon: <Minus size={15} />, title: "Horizontal Rule", command: "__hr" },
    ],
    [
      { type: "button", icon: <RemoveFormatting size={15} />, title: "Clear Formatting", command: "removeFormat" },
    ],
  ];

  const handleToolbarClick = (btn: ToolbarButton) => {
    if (btn.type === "separator") return;
    if (btn.command === "__link") { insertLink(); return; }
    if (btn.command === "__image") { insertImage(); return; }
    if (btn.command === "__hr") { insertHR(); return; }
    if (btn.command === "formatBlock" && btn.value) { formatBlock(btn.value); return; }
    exec(btn.command, btn.value);
  };

  return (
    <div className="border border-border rounded-xl overflow-hidden shadow-sm bg-card">
      {/* Toolbar */}
      <div className="flex flex-wrap items-center gap-1 p-2 border-b border-border bg-muted/60 sticky top-0 z-10">
        {toolbarGroups.map((group, gi) => (
          <div key={gi} className="flex items-center gap-0.5">
            {gi > 0 && <div className="w-px h-5 bg-border mx-1" />}
            {group.map((btn, bi) => {
              if (btn.type === "separator") return <div key={bi} className="w-px h-5 bg-border mx-1" />;
              return (
                <button
                  key={bi}
                  type="button"
                  title={btn.title}
                  onMouseDown={(e) => {
                    e.preventDefault(); // Don't lose focus from editor
                    handleToolbarClick(btn);
                  }}
                  className="p-1.5 rounded-md hover:bg-primary/10 hover:text-primary text-foreground/70 transition-colors"
                >
                  {btn.icon}
                </button>
              );
            })}
          </div>
        ))}

        {/* Font size selector */}
        <div className="w-px h-5 bg-border mx-1" />
        <select
          title="Font Size"
          onMouseDown={(e) => e.preventDefault()}
          onChange={(e) => exec("fontSize", e.target.value)}
          className="text-xs border border-border rounded px-1 py-0.5 bg-background text-foreground cursor-pointer hover:border-primary transition-colors"
          defaultValue=""
        >
          <option value="" disabled>Size</option>
          <option value="1">Small</option>
          <option value="3">Normal</option>
          <option value="5">Large</option>
          <option value="7">Huge</option>
        </select>

        {/* Text color */}
        <div className="w-px h-5 bg-border mx-1" />
        <div className="flex items-center gap-1" title="Text Color">
          <span className="text-xs text-muted-foreground select-none">A</span>
          <input
            type="color"
            defaultValue="#000000"
            title="Text Color"
            onMouseDown={(e) => e.preventDefault()}
            onChange={(e) => exec("foreColor", e.target.value)}
            className="w-6 h-6 rounded cursor-pointer border border-border"
          />
        </div>

        {/* Highlight color */}
        <div className="flex items-center gap-1" title="Highlight Color">
          <span className="text-xs text-muted-foreground select-none">Hl</span>
          <input
            type="color"
            defaultValue="#FFFF00"
            title="Highlight Color"
            onMouseDown={(e) => e.preventDefault()}
            onChange={(e) => exec("hiliteColor", e.target.value)}
            className="w-6 h-6 rounded cursor-pointer border border-border"
          />
        </div>
      </div>

      {/* Editable area */}
      <div
        ref={editorRef}
        contentEditable
        suppressContentEditableWarning
        onInput={handleInput}
        onBlur={handleInput}
        data-placeholder={placeholder}
        className="min-h-[320px] max-h-[600px] overflow-y-auto p-5 text-foreground text-base leading-relaxed outline-none
          [&_h1]:text-3xl [&_h1]:font-heading [&_h1]:font-bold [&_h1]:mb-3 [&_h1]:mt-4
          [&_h2]:text-2xl [&_h2]:font-heading [&_h2]:font-bold [&_h2]:mb-2 [&_h2]:mt-3
          [&_h3]:text-xl [&_h3]:font-heading [&_h3]:font-semibold [&_h3]:mb-2 [&_h3]:mt-3
          [&_p]:mb-3 [&_p]:leading-relaxed
          [&_blockquote]:border-l-4 [&_blockquote]:border-primary [&_blockquote]:pl-4 [&_blockquote]:italic [&_blockquote]:text-muted-foreground [&_blockquote]:my-4
          [&_pre]:bg-muted [&_pre]:p-4 [&_pre]:rounded-lg [&_pre]:font-mono [&_pre]:text-sm [&_pre]:my-4 [&_pre]:overflow-x-auto
          [&_ul]:list-disc [&_ul]:pl-6 [&_ul]:mb-3 [&_ul]:space-y-1
          [&_ol]:list-decimal [&_ol]:pl-6 [&_ol]:mb-3 [&_ol]:space-y-1
          [&_a]:text-primary [&_a]:underline
          [&_img]:max-w-full [&_img]:rounded-lg [&_img]:my-4 [&_img]:shadow-sm [&_img]:block [&_img]:mx-auto
          [&_hr]:border-border [&_hr]:my-6
          empty:before:content-[attr(data-placeholder)] empty:before:text-muted-foreground/50 empty:before:pointer-events-none"
      />
    </div>
  );
};

export default RichTextEditor;
