import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { fetchOrders } from '../../states/slices/ordersSlice';

function Pagination({params, count, active, setActive }) {

  const dispatch = useDispatch();

  const changePage = (e) => {
    if (e.target.tagName === "DIV") return;
    if (e.target.tagName === "NAV") return;
    const pageNum = e.target.innerHTML;
    setActive(pageNum)
    dispatch(fetchOrders(`_page=${pageNum}&_limit=
    
    ${params.get("_limit")}&delivered=${params.get("delivered")}`));
  };

  useEffect(() => {
    setActive("1");
  }, []);

  let items = [];

  for (let number = 1; number <= Math.ceil(count / params.get("_limit")) ; number++) {
    items.push(
      <a
      key={number}
      href="#"
      aria-current="page"
      className={`relative z-10 inline-flex items-center ${active == number ? "bg-indigo-600" : "bg-indigo-300"}  px-4 py-2 text-sm font-semibold text-white focus:z-20 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600`}
    >
      {number}
    </a>
    );
  }
  return (
          <div dir='ltr' className="isolate inline-flex -space-x-px rounded-md shadow-sm" aria-label="Pagination" onClick={changePage}>
            {items}
          </div>
  )
}

export default  Pagination;
