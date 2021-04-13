import Image from 'next/image'

const Profile = () => (
  <Image
    src="/images/cat.jpg" // Route of the image file
    height={144} // Desired size with correct aspect ratio
    width={144} // Desired size with correct aspect ratio
    alt="Cat Mimi"
  />
)