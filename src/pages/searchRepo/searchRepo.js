import React from "react";
import DefaultLayout from "../../layouts/defaultLayout";

const SearchRepo = () => {
    const title = "Search Github Repositories";
    return (
        <>
            <DefaultLayout title={title}>
            Search Repo
            </DefaultLayout>
        </>
    );
};
export default SearchRepo;