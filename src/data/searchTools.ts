import { categories } from './categories';
import { tools } from './tools';

const categoryLabels = Object.fromEntries(categories.map((cat) => [cat.id, cat.name]));

export interface SearchTool {
  name: string;
  path: string;
  icon: string;
  category: string;
}

export const searchTools: SearchTool[] = tools.map((tool) => ({
  name: tool.name,
  path: tool.path,
  icon: tool.icon,
  category: categoryLabels[tool.category] ?? tool.category,
}));
