import Link from 'next/link';
import ProfileEditForm from './components/ProfileEditForm';

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="container mx-auto px-4">
        <div className="flex justify-center gap-4 mb-8">
          <Link 
            href="/data-table" 
            className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors"
          >
            データテーブルを見る
          </Link>
        </div>
        <ProfileEditForm />
      </div>
    </div>
  );
}
