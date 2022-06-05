export async function preloadTemplates(): Promise<Handlebars.TemplateDelegate[]> {
  const templatePaths: string[] = [
    // Add paths to "modules/heroic-crafting/templates"
  ];

  return loadTemplates(templatePaths);
}
