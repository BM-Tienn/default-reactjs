/* eslint-disable no-template-curly-in-string */
/**
 *
 * FormContainer
 *
 */
import React, { memo, forwardRef, Ref } from 'react';
import { FormContainerWrapper } from './styled';
import { Form } from 'antd';
import { FormInstance } from 'antd/lib/form';

type NamePath = string | number | (string | number)[];
type ValidateStatusType = 'validating' | 'success' | 'warning' | 'error';

export interface FieldData {
  name: string[];
  value: any;
  touched?: boolean;
  validating?: boolean;
  errors?: string[];
}

export interface FormItemProps {
  name?: string | number;
  colon?: boolean;
  dependencies?: NamePath[] | undefined;
  extra?: React.ReactNode | string;
  help?: React.ReactNode | string;
  hasFeedback?: boolean;
  label?: string | React.ReactNode;
  labelAlign?: 'left' | 'right';
  rules?: any;
  htmlFor?: string;
  required?: boolean;
  trigger?: string;
  initialValue?: any;
  validateStatus?: ValidateStatusType;
  validateTrigger?: string | string[];
  valuePropName?: string;
  shouldUpdate?: boolean | ((prevValue: any, currentValue: any) => boolean);
  normalize?: (value: any, prevValue: any, prevValues: any) => void;
  wrapperCol?: object;
  children?: React.ReactNode;
}

export interface FormProps {
  layout?: 'inline' | 'horizontal' | 'vertical' | undefined;
  colon?: boolean;
  name?: string;
  disabled?: boolean;
  labelWrap?: boolean;
  requiredMark?: boolean;
  fields?: FieldData[];
  initialValues?: object;
  labelAlign?: 'left' | 'right';
  labelCol?: object;
  wrapperCol?: object;
  validateMessages?: any;
  size?: 'small' | 'middle' | 'large';
  onFinish: (values: any) => void;
  onFieldsChange?: (changeField: any, allFields: any) => void;
  onValuesChange?: (changeValue: any, allValues: any) => void;
}

interface Props extends FormProps {
  listFields: FormItemProps[];
  children?: React.ReactNode;
}

export type Type_RefFormFunc = {
  getFormInstance: () => FormInstance;
};

export const FormContainer = memo(
  forwardRef((props: Props, ref: Ref<Type_RefFormFunc>) => {
    const [form] = Form.useForm();
    const { listFields, validateMessages, ...formProps } = props;

    React.useImperativeHandle(ref, () => ({
      getFormInstance() {
        return form;
      },
    }));

    return (
      <FormContainerWrapper>
        <Form
          validateMessages={{
            ...{
              required: '${label} is not empty',
              string: {
                len: '${label} must be exactly ${len} characters',
                min: '${label} must be at least ${min} characters',
                max: '${label} cannot be longer than ${max} characters',
                range: '${label} must be between ${min} and ${max} characters',
              },
              types: {
                email: '${label} is invalid ${type}',
                number: '${label} is invalid ${type}',
                string: '${label} is invalid ${type}',
                date: '${label} is invalid ${type}',
                method: '${label} is invalid ${type}',
                array: '${label} is invalid ${type}',
                object: '${label} is invalid ${type}',
                boolean: '${label} is invalid ${type}',
                integer: '${label} is invalid ${type}',
                float: '${label} is invalid ${type}',
                regexp: '${label} is invalid ${type}',
                url: '${label} is invalid ${type}',
                hex: '${label} is invalid ${type}',
              },
              number: {
                len: '${label} must equal ${len}',
                min: '${label} cannot be less than ${min}',
                max: '${label} cannot be greater than ${max}',
                range: '${label} must be between ${min} and ${max}',
              },
              array: {
                len: '${label} must be exactly ${len} in length',
                min: '${label} cannot be less than ${min} in length',
                max: '${label} cannot be greater than ${max} in length',
                range: '${label} must be between ${min} and ${max} in length',
              },
              pattern: {
                mismatch: '${label} does not match pattern ${pattern}',
              },
              enum: '${label} must be one of [${enum}]',
              whitespace: '${label} cannot be empty',
              date: {
                format: '${label} is invalid for format date',
                parse: '${label} could not be parsed as date',
                invalid: '${label} is invalid date',
              },
            },
            ...validateMessages,
          }}
          {...formProps}
          form={form}
          style={{ display: 'flex', flexFlow: 'column', gap: '10px' }}
        >
          {listFields.map(field => {
            const { children, ...fieldProps } = field;
            return (
              children && (
                <Form.Item
                  key={field.name || new Date().toString()}
                  {...fieldProps}
                  style={{ marginBottom: '0px' }}
                >
                  {children}
                </Form.Item>
              )
            );
          })}
        </Form>
      </FormContainerWrapper>
    );
  }),
);
