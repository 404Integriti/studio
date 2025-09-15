import parse, { domToReact } from "html-react-parser";

export default function ContentRenderer({ html }) {
  return parse(html, {
    replace: (node) => {
      if (node.name === "p") {
        return (
          <p>
            {domToReact(node.children.filter(
              (child) => child.name !== "strong" && child.name !== "br"
            ))}
          </p>
        );
      }
    },
  });
}
