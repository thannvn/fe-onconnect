/* eslint-disable @typescript-eslint/no-explicit-any */
import { SelectItem } from 'shared/form/select/select-controller.component';

export const convertArrayToSelectItem = <T>(
  array: any[],
  label: keyof T,
  value: keyof T
): SelectItem[] => {
  if (!array || !array?.length) return [];

  return array.map((item) => ({ label: item[label], value: item[value] }));
};
