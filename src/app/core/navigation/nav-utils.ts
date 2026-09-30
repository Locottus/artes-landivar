import { NavItem, NavNode } from '../models/nav-item';

export function buildNav(nodes: readonly NavNode[], parentPath = ''): NavItem[] {
  return nodes.map(({ segment, children, kind, ...rest }) => {
    const path = `${parentPath}/${segment}`;
    return {
      ...rest,
      path,
      kind: kind ?? 'section',
      children: children ? buildNav(children, path) : [],
    };
  });
}

export function flattenNav(items: readonly NavItem[]): NavItem[] {
  return items.flatMap((item) => [item, ...flattenNav(item.children)]);
}

/** Quita query string, fragmento y "/" final de una URL del router. */
export function normalizePath(url: string): string {
  const path = url.split(/[?#]/)[0].replace(/\/+$/, '');
  return path || '/';
}
