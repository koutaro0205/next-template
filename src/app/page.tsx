import { Text } from '@/components/Text';

import styles from './page.module.css';

export const Home: React.FC = () => {
  return (
    <main className={styles.main}>
      <Text>Hello World</Text>
    </main>
  );
};

export default Home;
