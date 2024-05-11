import {appColors} from './colors';
import {bodyFontSize, btnFontSize, titleFontSize} from './fontSize';

export const componentsColors = {
  filterBtn: {
    backgroundColor: appColors.secondary,
    text: {
      color: appColors.textDark,
      size: titleFontSize.sm,
    },
    active: {
      backgroundColor: appColors.primary,
      text: {
        color: appColors.textLight,
      },
    },
  },
  tabsGroup: {
    backgroundColor: appColors.tertiary,
    text: {
      color: appColors.textDark,
      size: titleFontSize.md,
    },
    active: {
      borderColor: appColors.tabLine,
    },
  },
  chip: {
    backgroundColor: appColors.background.purple,
    text: {
      color: appColors.textDark,
      size: bodyFontSize.sm,
    },
  },
  textField: {
    label: {
      size: titleFontSize.sm,
      color: appColors.textDark,
    },
    input: {
      border: appColors.border,
      activeBorder: appColors.activeBorder,
    },
  },
  button: {
    main: {
      size: btnFontSize.md,
      color: appColors.textDark,
      background: appColors.primary,
    },
  },
};
