import { getIconInitials } from "app/helpers";
import React from "react";
import { Tooltip } from "../Tooltip";
import { DynamicIconStyled } from "./Styles";
import {
  useGetStatus,
  useGetBackground,
  getIcon,
  useGetFillColorByTypeOrStatus,
} from "./helpers";

export const DynamicIcon = (props) => {
  const {
    label,
    status: defaultStatus,
    type: defaultType,
    tooltip = false,
    showInitials,
    background,
    icon,
    description,
    badge,
  } = props;

  const type = defaultType || "";
  const status = defaultStatus || "";
  const iconStatusComponent = useGetStatus(status);
  const backgroundColor = useGetBackground(type, background, status);
  const renderedIcon = icon || getIcon(type);
  const iconFill = useGetFillColorByTypeOrStatus(type, status);

  const badgeBackgroundColor =
    badge && typeof badge === "object" && badge.background
      ? badge.background
      : iconFill;
  const badgePosition =
    badge && typeof badge === "object" ? badge.position : "top-right";
  const badgeContent = badge && typeof badge === "object" ? badge.label : badge;
  const dynamicIconContent = (
    <DynamicIconStyled
      type={type}
      status={status}
      iconLabel={label}
      backgroundColor={backgroundColor}
      iconFill={iconFill}
      background={background}
      badgeBackgroundColor={badgeBackgroundColor}
      badgePosition={badgePosition}
      badgeContent={badgeContent}
    >
      {background && (
        <svg className="icon-background-svg">
          <rect />
        </svg>
      )}
      <div className="icon-wrapper" data-testid="icon-wrapper">
        <div className="main-icon" data-testid="main-icon">{renderedIcon}</div>
        {showInitials && (
          <div className="icon-initials" data-testid="icon-initials">{getIconInitials(label)}</div>
        )}
        {iconStatusComponent && (
          <div className="icon-status" data-testid="icon-status">{iconStatusComponent}</div>
        )}
        <div className="icon-badge" data-testid="icon-badge">{badgeContent}</div>
      </div>
    </DynamicIconStyled>
  );

  return tooltip && description ? (
    <Tooltip
      content={description}
      themeColor={backgroundColor}
      textColor={iconFill}
      direction={"bottom"}
    >
      {dynamicIconContent}
    </Tooltip>
  ) : (
    dynamicIconContent
  );
};
