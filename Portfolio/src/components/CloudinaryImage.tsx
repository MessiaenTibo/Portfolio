import { Cloudinary } from '@cloudinary/url-gen';

// Import plugins
import {
  AdvancedImage,
  lazyload,
  accessibility,
  responsive,
  placeholder,
} from '@cloudinary/react';
import { fill } from '@cloudinary/url-gen/actions/resize';
import { full } from '@cloudinary/url-gen/qualifiers/fontHinting';
import { Delivery } from '@cloudinary/url-gen/actions';
import { auto } from '@cloudinary/url-gen/qualifiers/quality';
import { Reshape } from '@cloudinary/url-gen/actions/reshape';

export default ({
  link,
  alt,
  divClass,
  imgClass,
}: {
  link: string;
  alt: string;
  divClass?: string;
  imgClass?: string;
}) => {
  const cld = new Cloudinary({
    cloud: {
      cloudName: 'daljtudwo',
    },
  });
  const myImage = cld.image(link);
  myImage.format('webp');
  myImage.delivery(Delivery.quality('auto'));
  return (
    <div className={` ${divClass} `}>
        <AdvancedImage
        alt={alt}
        className={`w-full ${imgClass}`}
          cldImg={myImage}
          plugins={[
            responsive({
              steps: [250, 300, 350, 400, 450, 500, 550, 600, 650, 700, 750, 800, 850, 900]
            }),
          ]}
        />
    </div>
  );
};