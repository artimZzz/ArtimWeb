import ReactLoadingSkeleton, {
  type SkeletonProps
} from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'

export default function Skeleton(props: Props) {
  return <ReactLoadingSkeleton {...props} />
}

type Props = SkeletonProps
