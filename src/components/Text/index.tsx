import React from 'react';

import { styles } from './styles';

type Props = {
  children: string;
};

export const Text: React.FC<Props> = ({ children }) => {
  return <p className={styles.text}>{children}</p>;
};
