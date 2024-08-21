function MenuResto() {
  const styleMenu = {
    backgroundColor: "aquamarine",
    padding: "10px",
    color: "red",
    borderRadius: "10px",
    textAlign: "center",
    fontWeight: "bold",
    fontSize: "40px",
  };

  // const isMenu = true;
  {
    /* {isMenu === true ? (
      <div>Tipe ini Makanan</div>
    ) : (
      <div>Tipe ini Minuman</div>
    )} */
  }

  const menu = [
    { nama: "nasi goreng" },
    { nama: "ayam goreng" },
    { nama: "mie balap" },
  ];

  return (
    <>
      {menu.map((item, index) => {
        return (
          <div style={styleMenu} key={index}>
            <div>{item.nama}</div>
          </div>
        );
      })}
    </>
  );
}

export default MenuResto;
