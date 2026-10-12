export function formatPrice(value: number): string {
  return `${value.toLocaleString('fr-FR').replace(/\u202f|\u00a0/g, ' ')} DA`;
}
