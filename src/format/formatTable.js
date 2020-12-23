import dayjs from '@/utils/dayjs';
import {
  fButton,
  fPagination,
} from './format';

export const ftPagination = fPagination;

export const ftText = ({
  // Function(data, rowData)
  format = null,
  // String
  text = '',
  // Component
  slotComponent = null,
  // Object
  columnsStyle = {},
} = {}) => ({
  format,
  text,
  slotComponent,
  columnsStyle,
  align: 'center',
  columnType: 'text',
});

export const ftButton = ({
  // Function
  click = null,
  // Function
  format = null,
  text = '',
  ...rest
} = {}) => ({
  click,
  format,
  text,
  ...(fButton(rest)),
  columnType: 'button',
});

export const ftDate = ({
  dataIndex = '',
  ...rest
} = {}) => ftText({
  ...rest,
  format: (data, rowData) => {
    const date = dataIndex ? rowData[dataIndex] : data;
    if (!date) return '-';
    return dayjs(date).format('YYYY-MM-DD HH:mm:ss');
  },
});

export const ftColumn = ({
  // String, required
  dataIndex = '',
  title = '',
  // String, Object, Function
  header = null,
  ...rest
} = {}) => (...cusColumns) => {
  if (cusColumns.length === 0) cusColumns = [ftText()];
  return ({
    dataIndex,
    title,
    header,
    ...rest,
    cusColumns,
  });
};

export const ftSwitch = ({
  disabled,
  change,
  hasLoading,
  checkedChildren,
  unCheckedChildren,
  ...rest
} = {}) => ({
  ...rest,
  disabled,
  change,
  hasLoading,
  checkedChildren,
  unCheckedChildren,
  columnType: 'switch',
});

export const ftSelect = ({
  disabled,
  showArrow,
  value,
  options,
  change,
  ...rest
} = {}) => ({
  ...rest,
  disabled,
  showArrow,
  value,
  options,
  change,
  columnType: 'select',
});

export const ftTextarea = ({
  defaultValue,
  autoSize,
  placeholder,
  ...rest
} = {}) => ({
  defaultValue,
  autoSize,
  placeholder,
  ...rest,
  columnType: 'textarea',
});
