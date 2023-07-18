/* eslint-disable react/jsx-key */
import { useState } from "react";
import logo from "../../public/to-do-list.png";
const Project = () => {
  // store complete btn data
  const [info, setInfo] = useState([]);

  // complete Event work
  const completeEvent = (data) => {
    console.log(data);
    info.push(data);
    setInfo([...info]);
  };

  // remove all item
  const removeAllItem = () => {
    list.splice(0, list.length);
    setList([...list]);
  };
  // remove list item
  const removeItem = (index) => {
    list.splice(index, 1);
    setList([...list]);
  };
  //   set input value
  const [list, setList] = useState([]);
  const addList = () => {
    list.push(item);
    setList([...list]);
    document.getElementById("myInput").value = " ";
  };

  //Get input value
  const [item, setItem] = useState("");

  return (
    <>
      <section className="todoSection">
        <div className="container mx-auto px-10 py-10">
          <div className="h-100 w-full flex items-center justify-center bg-teal-lightest font-sans">
            <div className="bg-white rounded shadow p-6 m-4 w-full lg:w-3/4 ">
              <div className="mb-4">
                <div className="flex justify-center items-center mb-6">
                  <img className="h-14 w-14 " src={logo} alt="" />
                  <h1 className="text-grey-darkest text-2xl ms-1">List</h1>
                </div>
                <div className="flex mt-4">
                  <input
                    id="myInput"
                    onChange={(e) => setItem(e.target.value)}
                    className="shadow appearance-none border rounded w-full py-2 px-3 mr-4 text-grey-darker"
                    placeholder="Add Todo"
                  />
                  <button
                    onClick={addList}
                    className="flex-no-shrink p-2 border-2 rounded text-teal border-purple-800 hover:text-white hover:bg-purple-900"
                  >
                    Add
                  </button>
                </div>
              </div>

              {list.length !== 0 ? (
                <div>
                  <div className="flex mb-4 items-center">
                    <p className="w-full text-red-600 text-lg">
                      Remove All Items
                    </p>

                    <button
                      onClick={removeAllItem}
                      className="flex-no-shrink p-2 ml-2 border-2 rounded text-white bg-red-600"
                    >
                      Remove
                    </button>
                  </div>
                </div>
              ) : (
                <ul></ul>
              )}

              {/* start */}
              <table className="min-w-full border-collapse block md:table">
                <thead className="block md:table-header-group">
                  <tr className="border border-grey-500 md:border-none block md:table-row absolute -top-full md:top-auto -left-full md:left-auto  md:relative ">
                    <th className="bg-gray-600 p-2 text-white font-bold md:border md:border-grey-500 text-left block md:table-cell">
                      NO
                    </th>
                    <th className="bg-gray-600 p-2 text-white font-bold md:border md:border-grey-500 text-left block md:table-cell">
                      User Name
                    </th>
                    <th className="bg-gray-600 p-2 text-white font-bold md:border md:border-grey-500 text-left block md:table-cell">
                      Actions
                    </th>
                  </tr>
                </thead>

                {list.length !== 0 ? (
                  list.map((element, i) => {
                    return (
                      <>
                        <tbody className="block md:table-row-group">
                          <tr className="bg-gray-300 border border-grey-500 md:border-none block md:table-row">
                            <td className="p-2 md:border md:border-grey-500 text-left block md:table-cell">
                              {i}
                            </td>
                            <td className="p-2 md:border md:border-grey-500 text-left block md:table-cell">
                              {element}
                            </td>

                            <td className="p-2 md:border md:border-grey-500 text-left block md:table-cell">
                              <button
                                onClick={removeItem}
                                className="bg-red-500 hover:bg-red-700 text-white font-bold py-1 px-2 border border-red-500 rounded "
                              >
                                Remove
                              </button>
                              <button
                                onClick={() => completeEvent(element)}
                                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-1 px-2 border border-blue-500 rounded ms-1"
                              >
                                Complete
                              </button>
                            </td>
                          </tr>
                        </tbody>
                      </>
                    );
                  })
                ) : (
                  <ul></ul>
                )}
              </table>
              {/* end */}

              {/* Complete */}
              <div className="completeBox w-[500px] ms-auto py-3 shadow-sm mt-2">
                <h1 className="py-2 bg-pink-100 text-center text-lg font-semibold">
                  Complete BOx
                </h1>
                <table className="min-w-full border-collapse block md:table">
                  <thead className="block md:table-header-group">
                    <tr className="border border-grey-500 md:border-none block md:table-row absolute -top-full md:top-auto -left-full md:left-auto  md:relative ">
                      <th className="bg-gray-600 p-2 text-white font-bold md:border md:border-grey-500 text-left block md:table-cell">
                        NO
                      </th>
                      <th className="bg-gray-600 p-2 text-white font-bold md:border md:border-grey-500 text-left block md:table-cell">
                        User Name
                      </th>
                    </tr>
                  </thead>

                  {info.length !== 0 ? (
                    info.map((element, i) => {
                      return (
                        <>
                          <tbody className="block md:table-row-group">
                            <tr className="bg-gray-300 border border-grey-500 md:border-none block md:table-row">
                              <td className="p-2 md:border md:border-grey-500 text-left block md:table-cell">
                                {i}
                              </td>
                              <td className="p-2 md:border md:border-grey-500 text-left block md:table-cell">
                                {element}
                              </td>
                            </tr>
                          </tbody>
                        </>
                      );
                    })
                  ) : (
                    <ul></ul>
                  )}
                </table>
              </div>
              {/* end */}
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Project;
