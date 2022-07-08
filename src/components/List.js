import { useGetCategoriesQuery } from "../services/categories";
import React from 'react';
import Accordion from "./Accordion";

// Komponent List uzyty do wyswitlenia harmonijki
const List = () => {
    const { data, error, isLoading, isSuccess, isError } = useGetCategoriesQuery();
    // Zbiory objektow zwroconych po przesortowaniu API Endpoint
    let level1 = [];
    let level2 = [];
    let level3 = [];
    let esports = [];
    let esportsLvl1 = [];
    let esportsLvl2 = [];
    let esportsLvl3 = [];
    if (data) {
        const sortedData = [...data.data].sort((a, b) => a.sortOrder - b.sortOrder).map((item) =>
            item.sportName.startsWith('Esport') ? esports.push(item) : item);
        sortedData.map((item) => item.level === 1 ? level1.push(item) : item.level === 2 ? level2.push(item) : level3.push(item));
        esports.map((item) => item.level === 1 ? esportsLvl1.push(item) : item.level === 2 ? esportsLvl2.push(item) : esportsLvl3.push(item));
    }

    return (
        <div className="list">
            {isLoading && "Loading..."}
            {isError && error.message}
            {/* Kategoria Sporty wykluczając Esport */}
            {isSuccess && data && level1.map((item) =>
                // Pierwszy Poziom Harmonijki
                <Accordion
                    key={item.categoryId}
                    title={item.categoryName}
                    count={item.eventsCount}
                    content={
                        level2.filter(e => e.parentCategory === item.categoryId).map(el =>
                            // Drugi Poziom Harmonijki
                            <Accordion
                                key={el.categoryId}
                                title={el.categoryName}
                                count={el.eventsCount}
                                content={
                                    level3.filter(e => e.parentCategory === el.categoryId).map(elem =>
                                        // Trzeci Poziom Harmonijki
                                        <div
                                            key={elem.categoryId}
                                            className="accordion-lvl3">
                                            <label>
                                                <input type={"checkbox"} value="1" name="checkbox" id="checkbox" />
                                                {elem.categoryName}
                                            </label>
                                            <span className="text-mantee-2">({elem.eventsCount})</span>
                                        </div>)} />
                        )} />)}
            {/* Kategoria Esport */}
            {isSuccess && data &&
                // Pierwszy Poziom Harmonijki
                <Accordion
                    title={"Esports"}
                    count={esportsLvl1.reduce((sum, item) => { return sum + item.eventsCount }, 0)}
                    content={esportsLvl1.map((item) =>
                        // Drugi Poziom Harmonijki
                        <Accordion
                            key={item.categoryId}
                            title={item.categoryName}
                            count={item.eventsCount}
                            content={
                                esportsLvl2.filter(e => e.parentCategory === item.categoryId).map(el =>
                                    // Trzeci Poziom Harmonijki
                                    <Accordion
                                        key={el.categoryId}
                                        title={el.categoryName}
                                        count={el.eventsCount}
                                        content={
                                            // Czwarty Poziom Harmonijki
                                            esportsLvl3.filter(e => e.parentCategory === el.categoryId).map(elem =>
                                                <div
                                                    key={elem.categoryId}
                                                    className="accordion-lvl3">
                                                    <label>
                                                        <input type={"checkbox"} value="1" name="checkbox" id="checkbox" />
                                                        {elem.categoryName}
                                                    </label>
                                                    <span className="text-mantee-2">({elem.eventsCount})</span>
                                                </div>)} />
                                )} />)} />}
        </div>
    );
}

export default List;