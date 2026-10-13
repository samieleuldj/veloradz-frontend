import type { Product } from './products';

export type ProductColorChoice = {
  /** Stored on orders (French + Arabic) */
  value: string;
  labelFr: string;
  labelAr: string;
  swatch: string;
};

function swatchForLabel(label: string): string {
  const s = label.toLowerCase();
  if (s.includes('so black')) return '#0A0A0A';
  if (s.includes('monogram') && s.includes('beige')) return '#C4A574';
  if (s.includes('monogram') && (s.includes('bleu') || s.includes('marine'))) return '#1E3A5F';
  if (s.includes('litchi')) return '#6B4423';
  if (s.includes('monogram')) return '#8B6914';
  if (s.includes('rose') || s.includes('ورد')) return '#E8A0B5';
  if (s.includes('gronat') || s.includes('bourdeaux') || s.includes('غرون')) return '#6B1F2B';
  if (s.includes('beige') || s.includes('باج') || s.includes('بيج')) return '#C4A574';
  if (s.includes('khaki') || s.includes('كاكي')) return '#8B8370';
  if (s.includes('crème') || s.includes('blanc') || s.includes('كريم')) return '#F6EFE6';
  if (s.includes('bleu') || s.includes('marine') || s.includes('أزرق')) return '#1E3A5F';
  if (s.includes('brun') || s.includes('بني')) return '#5C3317';
  if (s.includes('noir') || s.includes('أسود')) return '#1A1A1A';
  return '#B8935A';
}

const AR_BY_KEY: Record<string, string> = {
  noir: 'أسود',
  rose: 'وردي',
  gronat: 'غرونا',
  beige: 'باج',
  brun: 'بني',
  khaki: 'كاكي',
};

function defaultArabic(labelFr: string): string {
  const lower = labelFr.toLowerCase();
  for (const [key, ar] of Object.entries(AR_BY_KEY)) {
    if (lower.includes(key)) return ar;
  }
  if (lower.includes('blanc') || lower.includes('crème')) return 'كريمي';
  if (lower.includes('bleu')) return 'أزرق داكن';
  if (lower.includes('so black')) return 'أسود كامل';
  if (lower.includes('monogram')) return 'مونوغرام';
  return '—';
}

export function parseColorLine(raw: string): ProductColorChoice {
  const trimmed = raw.trim();
  const paren = trimmed.match(/^(.+?)\s*\(([^)]+)\)\s*$/);
  if (paren) {
    const labelFr = paren[1].trim();
    const labelAr = paren[2].trim();
    return {
      value: `${labelFr} (${labelAr})`,
      labelFr,
      labelAr,
      swatch: swatchForLabel(labelFr),
    };
  }
  const labelFr = trimmed;
  const labelAr = defaultArabic(labelFr);
  return {
    value: `${labelFr} (${labelAr})`,
    labelFr,
    labelAr,
    swatch: swatchForLabel(labelFr),
  };
}

export function getProductColorChoices(product: Product): ProductColorChoice[] {
  if (product.colorChoices?.length) {
    return product.colorChoices.map((c) => ({
      ...c,
      value: c.value || `${c.labelFr} (${c.labelAr})`,
    }));
  }
  const raw = product.collection
    ? product.colors?.length
      ? product.colors
      : ['Noir']
    : product.colors ?? [];
  return raw.map(parseColorLine);
}

export function formatColorsForSpecs(choices: ProductColorChoice[]): string {
  return choices.map((c) => `${c.labelFr} (${c.labelAr})`).join(' · ');
}
