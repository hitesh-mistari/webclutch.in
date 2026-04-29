import { DentistTemplate } from './DentistTemplate';
import { ClinicTemplate } from './ClinicTemplate';
import { SalonTemplate } from './SalonTemplate';
import { FallbackTemplate } from './FallbackTemplate';

export const templates: Record<string, React.FC<any>> = {
  dentist: DentistTemplate,
  clinic: ClinicTemplate,
  salon: SalonTemplate,
};

export function getTemplate(category: string) {
  const normalizedCategory = category?.toLowerCase();
  return templates[normalizedCategory] || FallbackTemplate;
}

export { DentistTemplate, ClinicTemplate, SalonTemplate, FallbackTemplate };
