import React, {ReactNode} from 'react'

interface IShirtIconProps {
  children?: ReactNode
}

// export const ShirtIcon: React.FC<IShirtIconProps> = () => {
//   return (
//     <svg viewBox="0 0 162 148" xmlns="http://www.w3.org/2000/svg">
//       <path
//         d="M96.924 20.282c-2.946 3.507-27.577 3.507-30.523 0-.619 0-42.4 22.013-42.4 22.013l9.73 22.805 14.086-1.833v62.21h67.691v-62.21l14.085 1.833 9.731-22.805c-.01-.003-41.788-22.016-42.406-22.016zm-29.79 5.376c8.881 3.862 22.01 3.739 29.057 0-4.226 10.488-21.525 12.205-29.057 0z"
//         fillRule="evenodd"
//         fill="none"
//       />
//     </svg>
//   )
// }

export const ShirtIcon: React.FC<IShirtIconProps> = () => {
  return (
    <svg
      width="14"
      height="14"
      viewBox="0 0 14 14"
      fill="none"
      xmlns="http://www.w3.org/2000/svg">
      <path
        d="M96.924 20.282c-2.946 3.507-27.577 3.507-30.523 0-.619 0-42.4 22.013-42.4 22.013l9.73 22.805 14.086-1.833v62.21h67.691v-62.21l14.085 1.833 9.731-22.805c-.01-.003-41.788-22.016-42.406-22.016zm-29.79 5.376c8.881 3.862 22.01 3.739 29.057 0-4.226 10.488-21.525 12.205-29.057 0z"
        fill="#000"
      />
    </svg>
  )
}
