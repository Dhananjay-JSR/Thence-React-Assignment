export default function AccordianBtn({ showOpen }: { showOpen?: boolean }) {
  return (
    <button>
      {showOpen ? (
        <svg
          className="w-4 h-4"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M5 11V13H19V11H5Z" fill="black" />
        </svg>
      ) : (
        <svg
          className="w-4 h-4"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M11 11V5H13V11H19V13H13V19H11V13H5V11H11Z" fill="black" />
        </svg>
      )}
    </button>
  );
}
