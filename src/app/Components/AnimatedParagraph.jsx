"use client";
import { motion } from "framer-motion";
import { Children, cloneElement, isValidElement } from "react";

export default function AnimatedWords({ children }) {
  // Convert children into a flat array of words **while keeping JSX**
  const processNode = (node) => {
    if (typeof node === "string") {
      return node.split(" ").map((word) => ({ type: "word", content: word }));
    }

    if (isValidElement(node)) {
      // Recursively process children of elements
      const processedChildren = Children.toArray(node.props.children)
        .map(processNode)
        .flat();

      return {
        type: "element",
        element: node,
        children: processedChildren,
      };
    }

    return [];
  };

  const structured = Children.toArray(children)
    .map(processNode)
    .flat();

  let index = 0;

  const renderNode = (node) => {
    if (node.type === "word") {
      const delay = index * 0.04;
      index++;

      return (
        <motion.span
          key={index}
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay, duration: 0.25 }}
          className="mr-1 inline-block"
        >
          {node.content}
        </motion.span>
      );
    }

    if (node.type === "element") {
      return cloneElement(
        node.element,
        { ...node.element.props },
        node.children.map(renderNode)
      );
    }
  };

  return (
    <p className="text-lg leading-relaxed text-white flex flex-wrap">
      {structured.map(renderNode)}
    </p>
  );
}
