import { Field } from 'payload/types';
import deepMerge from '../../../utilities/deepMerge';

const createParentField = (relationTo: string, overrides: Partial<Field> = {}): Field => deepMerge({
  name: 'parent',
  relationTo,
  type: 'relationship',
  admin: {
    position: 'sidebar',
  },
}, overrides);

export default createParentField;
