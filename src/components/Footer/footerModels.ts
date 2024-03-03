type TLink = {
  id: number;
  label: string;
  url: string;
};

export type TFooterLinksProps = {
  title: string;
  links: TLink[];
};
