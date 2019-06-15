import React from "react";
import DefaultLayout from "../../layouts/defaultLayout";
import RepoList from "./repoList/repoList";

const SearchRepo = () => {
    const title = "Search Github Repositories";
    return (
        <DefaultLayout title={title}>
            <RepoList />
        </DefaultLayout>
    );
};
export default SearchRepo;
