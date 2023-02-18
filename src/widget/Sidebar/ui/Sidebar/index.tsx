import * as React from 'react';
import { classNames } from 'shared/lib/classNames';
import { ThemeSwitcher } from 'shared/ui/ThemeSwitcher';
import styles from './Sidebar.module.scss';

type Props = {
  className?: string;
};

const Sidebar = ({ className }: Props) => {
  const [collapsed, setCollapsed] = React.useState(false);

  const onToggle = () => {
    setCollapsed(!collapsed);
  };

  return (
    <div
      className={classNames(styles.Sidebar, { [styles.collapsed]: collapsed }, [
        className,
      ])}
    >
      <button type='button' onClick={onToggle}>
        Toggle
      </button>
      <div className={styles.switchers}>
        <ThemeSwitcher />
      </div>
    </div>
  );
};

export { Sidebar };