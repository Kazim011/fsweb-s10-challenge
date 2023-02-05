import React from "react";
import Post from "./Post";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { verileriSil } from "../actions";

const PostList = () => {
  const dispatch = useDispatch();
  const notlar = useSelector((depo) => depo.notlar);

  useEffect(() => {
    localStorage.setItem("s10ch", JSON.stringify(notlar));
  }, [notlar]);

  return notlar.length === 0 ? (
    <div className="beyazKutu text-center p-6">Hiç notunuz yok</div>
  ) : (
    <div>
      {notlar.map((not) => (
        <Post item={not} key={not.id} />
      ))}
      <button
        className="bg-red-500 hover:bg-red-600 text-white font-bold py-2 px-4 rounded transition duration-150 ease-in-out"
        onClick={() => dispatch(verileriSil())}
      >
        Tüm Listeyi Temizle
      </button>
    </div>
  );
};

export default PostList;
