import { Button } from '@/components/ui/button'
import { cn } from '@/lib/utils';
import { cva } from 'class-variance-authority';
import { Link, useParams } from 'react-router'

const sidebarItemVarients = cva(
    'flex items-center justify-start gap-1.5 font-normal h-7 px-[20px] text-sm overflow-hidden',
    {
        variants: {
            variant:{
                default:'text-[#f9edffcc]',
                active:'text-[#481350] bg-white/90 hover:white/80',
            },
            defaultVariants:'default'
        }
    }
);

const SidebarItem = ({
    label,
    id,
    icon: Icon,
    variant
}) => {
    const { workspaceId } = useParams();
    return (
        <Button
            variant='transparent'
            size='sm'
            className={cn(sidebarItemVarients({variant}))}
        >
            <Link 
                className='flex items-center gap-1.5'
                to={`/workspaces/${workspaceId}/channels/${id}`}
            >
                <Icon className="size-3.5 mr-1" />
                <span className='text-sm'>{label}</span>
            </Link>
        </Button>
    )
}

export default SidebarItem