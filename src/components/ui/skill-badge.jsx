import BehindEffect from "@/components/ui/behind-effect"

const SkillBadge = ({className, skill, image}) => {
    return (
        <div className={`bg-primary flex items-center p-3 overflow-ellipsis ${className}`}>
            {image && <img className='w-6 h-6 mr-3' src={image} />}
            {skill}
        </div>
        
    )
} 

export default SkillBadge