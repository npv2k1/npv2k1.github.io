import Link from 'next/link';
import { cn } from '@/utils';
export type SocialLinkProps = {
  href: string;
  icon: string;
  color: string;
};

function SocialLink({ href, icon, color }: SocialLinkProps) {
  return (
    <div className="items-center rounded-lg border-blue-500 p-3 hover:bg-gray-200 hover:scale-150 hover:transform hover:-translate-y-4 ">
      <Link href={href} target="_blank">
        <i className={`fab ${icon} fa-2x `} style={{ color }}></i>
      </Link>
    </div>
  );
}

export default SocialLink;
