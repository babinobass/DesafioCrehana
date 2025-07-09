interface SpinnerProps {
  message?: string;
}
const Spinner = ({ message }: SpinnerProps) => {
  return (
    <div className="flex justify-center items-center h-screen flex-col w-screen">
      <div className="animate-spin rounded-full h-32 w-32 border-t-4 border-b-4 border-indigo-700"></div>
      {message && <p className="text-center text-black-500 mt-4">{message}</p>}
    </div>
  );
};

export default Spinner;
