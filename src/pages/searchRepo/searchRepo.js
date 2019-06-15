import React from "react";
import DefaultLayout from "../../layouts/defaultLayout";
import Search from "../../components/search";

const handleSearch = keyword => {
    console.log(keyword)
};
const SearchRepo = () => {
    const title = "Search Github Repositories";
    return (
        <>
            <DefaultLayout title={title}>
                <Search onFilter={handleSearch} />
            </DefaultLayout>
        </>
    );
};
export default SearchRepo;