import React from "react";
import ContentLoader from "react-content-loader";

const ListingWithThumbnail = props => {
  return (
    <ContentLoader
      height={40}
      width={1060}
      speed={2}
      primaryColor="#d9d9d9"
      secondaryColor="#ecebeb"
      {...props}
    >
      <Rect x="103" y="12" rx="3" ry="3" width="123" height="7" />
      <Rect x="102" y="152" rx="3" ry="3" width="171" height="6" />
      <Circle cx="44" cy="42" r="38" />
      <Circle cx="44" cy="147" r="38" />
      <Circle cx="44" cy="251" r="38" />
      <Rect x="105" y="117" rx="3" ry="3" width="123" height="7" />
      <Rect x="104" y="222" rx="3" ry="3" width="123" height="7" />
      <Rect x="105" y="48" rx="3" ry="3" width="171" height="6" />
      <Rect x="104" y="257" rx="3" ry="3" width="171" height="6" />
    </ContentLoader>
  );
};

ListingWithThumbnail.metadata = {
  name: "Rituraj ratan",
  github: "riturajratan",
  description: "Listing with thumbnail",
  filename: "ListingWithThumbnail"
};

export default ListingWithThumbnail;
