"use client";
import React from "react";

import { TinaMarkdown } from "tinacms/dist/rich-text";
import type { Template } from "tinacms";
import { PageBlocksContent2 } from "@/tina/__generated__/types";
import { tinaField } from "tinacms/dist/react";
import { Section } from "../layout/section";
import { mermaid } from "./mermaid";
import { sectionBlockSchemaField } from '../layout/section';
import { scriptCopyBlockSchema, ScriptCopyBtn } from "../magicui/script-copy-btn";

export const Content2 = ({ data }: { data: PageBlocksContent2 }) => {
  return (
      <Section background={data.background!} className="prose prose-lg">
        <div className="flex flex-col md:flex-row md:gap-8">
          <div className="flex-1" data-tina-field={tinaField(data, "body")}>
            <TinaMarkdown
                content={data.body}
                components={{
                  mermaid,
                  scriptCopyBlock: (props: any) => <ScriptCopyBtn {...props} />,
                }}
            />
          </div>
          <div className="flex-1 mt-8 md:mt-0" data-tina-field={tinaField(data, "secondaryBody")}>
            <TinaMarkdown
                content={data.secondaryBody}
                components={{
                  mermaid,
                  scriptCopyBlock: (props: any) => <ScriptCopyBtn {...props} />,
                }}
            />
          </div>
        </div>
      </Section>
  );
};

export const content2BlockSchema: Template = {
  name: "content2",
  label: "Content2",
  ui: {
    previewSrc: "/blocks/content.png",
    defaultItem: {
      body: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Donec odio. Quisque volutpat mattis eros. Nullam malesuada erat ut turpis. Suspendisse urna nibh, viverra non, semper suscipit, posuere a, pede.",
      secondaryBody: "This is the secondary content area. You can add additional information, details, or complementary content here. This will display side-by-side with the main content on desktop and stack below it on mobile devices.",
    },
  },
  fields: [
    sectionBlockSchemaField as any,
    {
      type: "rich-text",
      label: "Primary Content",
      name: "body",
      templates: [
        scriptCopyBlockSchema,
      ],
    },
    {
      type: "rich-text",
      label: "Secondary Content",
      name: "secondaryBody",
      templates: [
        scriptCopyBlockSchema,
      ],
    }
  ],
};
