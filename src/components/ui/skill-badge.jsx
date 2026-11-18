const SkillBadge = ({ className, skill, image }) => {
  return (
    <div
      className={`bg-white dark:bg-secondary shadow-xl flex items-center p-3 whitespace-nowrap overflow-hidden ${className}`}
    >
      {image && (
        <img
          className="w-6 h-6 mr-2.5 shrink-0 object-contain"
          src={image}
          alt={skill}
        />
      )}
      <span className="truncate">{skill}</span>
    </div>
  );
};

export default SkillBadge;
