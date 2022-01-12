import React, { Fragment, useCallback } from "react";
import { BadgeType } from "./style.js";

const Badge = ({ isSale, isExclusive }) => {
  const getBadgeContent = useCallback(() => {
    if (isSale) {
      return (
        <BadgeType
          isSale={isSale}
          className="inline-flex items-center justify-center px-2 py-1 text-xs font-bold text-red-100 rounded"
        >
          Sale
        </BadgeType>
      );
    }
    if (isExclusive) {
      return (
        <BadgeType
          isExclusive={isExclusive}
          className="inline-flex items-center justify-center px-2 py-1 text-xs font-bold text-red-100 rounded"
        >
          Exclusive
        </BadgeType>
      );
    }
  }, [isExclusive, isSale]);

  return <Fragment>{getBadgeContent()}</Fragment>;
};

export default Badge;
