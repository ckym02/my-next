import { getAllReviews } from '@/lib/getter';
import LinkedBookDetails from '@/components/LinkedBookDetails';

// 最新のレビュー情報を表示したいので、極力キャッシュを無効にする
export const dynamic = 'force-dynamic';
export default async function Home() {
  // サーバーコンポーネント
  const reviews = await getAllReviews();
  return (
    <>
      {reviews.map((b,i) => (
        <LinkedBookDetails book={b} index={i + 1} key={b.id} />
      ))}
    </>
  )
}
