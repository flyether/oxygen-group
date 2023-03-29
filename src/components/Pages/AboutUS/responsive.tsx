import { MemberWithoutSlider, Responsive, Responsive1 } from './carousel';

export const ResponsiveIf = ({ screenWidth }: { screenWidth: number }) => {
  if (screenWidth >= 1101) return <MemberWithoutSlider />;
  else if (screenWidth < 1101 && screenWidth >= 560) return <Responsive />;
  else if (screenWidth < 560) return <Responsive1 />;
  else return null;
};
