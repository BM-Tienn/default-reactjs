/**
 *
 * Search
 *
 */
import React, {
  memo,
  useState,
  useCallback,
  useEffect,
  CSSProperties,
} from 'react';
import { SearchWrapper } from './styled';
import { useDebounce } from 'utils/hooks/useDebounce';
import { Input } from 'antd';
import { SearchOutlined } from '@ant-design/icons';

interface Props {
  theme?: 'light' | 'dark';
  size?: 'sm' | 'md' | 'lg';
  borderRadius?: number;
  placeholder?: string;
  width?: number | 'auto';
  onTriggerSearch: ({ value }) => void;
  className?: string;
  styleContainer?: CSSProperties;
  defaultValue?: string;
}

export const Search = memo(
  ({
    theme = 'dark',
    size = 'md',
    borderRadius = 8,
    width = 'auto',
    placeholder,
    onTriggerSearch,
    styleContainer,
    className = '',
    defaultValue,
  }: Props) => {
    const [valueSearch, setValueSearch] = useState('');
    /**
     * @param {isMounted}: do not trigger search on the first component mountedc
     */
    const [isMounted, setIsMounted] = useState(false);

    const debounceValueSearch = useDebounce({ value: valueSearch, delay: 500 });

    useEffect(() => {
      setIsMounted(true);
      isMounted && onTriggerSearch({ value: debounceValueSearch });
      return () => {
        setIsMounted(false);
      };
      // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [debounceValueSearch]);

    const onChangeValueSearch = useCallback(
      (e: React.SyntheticEvent<HTMLInputElement>) =>
        setValueSearch((e.target as any).value),
      [],
    );

    // NOTE: RESET VALUE IF RESET DEFAULT VALUE
    useEffect(() => {
      if (!defaultValue && valueSearch) {
        setValueSearch('');
        setIsMounted(false);
      }
      // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [defaultValue]);

    return (
      <SearchWrapper
        width={width}
        theme={theme}
        borderRadius={borderRadius}
        size={size}
        className={className}
        style={styleContainer}
      >
        <Input
          suffix={<SearchOutlined />}
          value={valueSearch}
          allowClear
          onChange={onChangeValueSearch}
          size={size === 'sm' ? 'small' : size === 'lg' ? 'large' : 'middle'}
          placeholder={placeholder || 'Search'}
        />
      </SearchWrapper>
    );
  },
);
