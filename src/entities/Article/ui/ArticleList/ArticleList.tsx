/* eslint-disable operator-linebreak */
/* eslint-disable indent */
/* eslint-disable react/jsx-indent */
import { HTMLAttributeAnchorTarget } from 'react';
import { Text, TextSize } from 'shared/ui/Text/Text';
import { useTranslation } from 'react-i18next';
import { classNames } from 'shared/lib/classNames';
import { Article, ArticleView } from 'entities/Article/model/types/article';
import { ArticleListItem } from '../ArticleListItem/ArticleListItem';
import { ArticleListItemSkeleton } from '../ArticleListItem/ArticleListItemSkeletom';
import styles from './ArticleList.module.scss';

interface ArticleListProps {
  className?: string;
  articles: Article[];
  isLoading?: boolean;
  view?: ArticleView;
  target?: HTMLAttributeAnchorTarget;
}

export const ArticleList = ({
  className,
  articles,
  isLoading,
  view = ArticleView.GRID,
  target,
}: ArticleListProps) => {
  const { t } = useTranslation();

  if (!isLoading && articles.length === 0) {
    return (
      <div
        className={classNames(styles.ArticleList, {}, [
          className,
          styles[view],
        ])}
      >
        <Text size={TextSize.L} title={t('Articles not found')} />
      </div>
    );
  }

  return (
    <div
      className={classNames(styles.ArticleList, {}, [className, styles[view]])}
    >
      {articles.length > 0
        ? articles.map((article) => (
            <ArticleListItem
              className={styles.card}
              article={article}
              view={view}
              key={article.id}
              target={target}
            />
          ))
        : null}
      {isLoading &&
        new Array(view === ArticleView.GRID ? 9 : 3)
          .fill(0)
          .map((_, index) => (
            <ArticleListItemSkeleton
              className={styles.card}
              key={index}
              view={view}
            />
          ))}
    </div>
  );
};
