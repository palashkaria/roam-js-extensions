/// <reference types="next" />
/// <reference types="next/types/global" />

// https://github.com/jescalan/babel-plugin-import-glob-array/issues/7
interface FrontMatter {
  __resourcePath: string;
  description: string;
  development: boolean;
}

declare module "*.mdx" {
  const MDXComponent: (props: any) => JSX.Element;
  export default MDXComponent;
  export const frontMatter: FrontMatter[];
}

declare module "@mozilla/readability" {
  export { default as Readability } from "mozilla-readability";
}

declare module "react-charts" {
  type SeriesType = "line" | "bubble" | "area" | "bar";
  type AxisType = "ordinal" | "time" | "utc" | "linear" | "log";
  export const Chart: React.FunctionComponent<{
    data: { label: string; data: (number | string | Date)[][] }[];
    axes: { primary?: boolean; type: AxisType; position: string }[];
    series: {
      type: SeriesType;
    };
    defaultColors?: string[];
  }>;
}
