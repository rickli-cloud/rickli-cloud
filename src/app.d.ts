declare module "language-colors" {
  const langMap: { [lang: string]: string };
  export default langMap;
}

declare module "virtual:decap-cms" {
  const CmsOptions: CmsConfig.Full;
  export default CmsOptions;
}
