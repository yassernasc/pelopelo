export const Especial = ({ active, ...props }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={47} height={44} {...props}>
    <path
      fill={active ? "var(--secondary)" : "var(--inactive)"}
      d="M46.677 16.534a3.908 3.908 0 0 0-1.3-1.847 3.988 3.988 0 0 0-2.117-.834l-11.283-.963-4.415-10.384A3.92 3.92 0 0 0 26.103.774a3.996 3.996 0 0 0-4.37 0 3.92 3.92 0 0 0-1.46 1.732l-4.42 10.384-11.283.963a3.99 3.99 0 0 0-2.13.83 3.908 3.908 0 0 0-1.308 1.855 3.86 3.86 0 0 0-.05 2.259c.21.741.637 1.405 1.227 1.909l8.576 7.386L8.31 39.08a3.86 3.86 0 0 0 .146 2.251c.272.72.753 1.345 1.383 1.797a4 4 0 0 0 4.372.185l9.7-5.816 9.7 5.815a4 4 0 0 0 4.37-.186 3.915 3.915 0 0 0 1.382-1.796 3.86 3.86 0 0 0 .147-2.25l-2.574-10.99 8.576-7.386a3.902 3.902 0 0 0 1.22-1.912 3.86 3.86 0 0 0-.056-2.26Zm-13.214 8.328a3.905 3.905 0 0 0-1.168 1.745 3.86 3.86 0 0 0-.089 2.09l2.255 9.637-8.5-5.096a3.978 3.978 0 0 0-4.098 0l-8.5 5.096 2.255-9.637a3.86 3.86 0 0 0-.09-2.09 3.905 3.905 0 0 0-1.167-1.745l-7.54-6.493 9.925-.849a3.976 3.976 0 0 0 1.99-.734 3.9 3.9 0 0 0 1.314-1.647l3.862-9.085 3.862 9.085a3.9 3.9 0 0 0 1.314 1.647c.583.42 1.271.674 1.99.734l9.925.849-7.54 6.493Z"
    />
  </svg>
);
