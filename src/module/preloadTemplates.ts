export async function preloadTemplates(): Promise<Handlebars.TemplateDelegate[]> {
  const templatePaths: string[] = ['modules/heroic-crafting/templates/active-projects.html'];

  return loadTemplates(templatePaths);
}
