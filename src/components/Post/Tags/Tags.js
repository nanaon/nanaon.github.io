// // @flow strict
// import React from 'react';
// import { Link } from 'gatsby';
// import styles from './Tags.module.scss';

// type Props = {
//   tags: string[],
//   tagSlugs: string[]
// };

// const Tags = ({ tags, tagSlugs }: Props) => (
//   <div className={styles['tags']}>
//     <ul className={styles['tags__list']}>
//       {tagSlugs && tagSlugs.map((slug, i) => (
//         <li className={styles['tags__list-item']} key={tags[i]}>
//           <Link to={slug} className={styles['tags__list-item-link']}>
//             {tags[i]}
//           </Link>
//         </li>
//       ))}
//     </ul>
//   </div>
// );

// export default Tags;

// @flow
import React from 'react';
import { Link } from 'gatsby';
import cx from 'classnames';
import styles from './Tags.module.scss';

type Props = {
  tags: string[],
  tagSlugs: string[],
  inSidebar?: boolean
};

const Tags = ({ tags, tagSlugs, inSidebar }: Props) => (
  <div className={styles['tags']}>
    <ul className={styles['tags__list']}>
      {tagSlugs && tagSlugs.map((slug, i) => (
        <li
          className={cx(
            styles['tags__list-item'],
            inSidebar && styles['tags_insidebar__list-item']
          )}
          key={tags[i]}
        >
          <Link
            to={slug}
            className={cx(
              styles['tags__list-item-link'],
              inSidebar && styles['tags_insidebar__list-item-link']
            )}
          >
            {tags[i]}
          </Link>
        </li>
      ))}
    </ul>
  </div>
);

export default Tags;