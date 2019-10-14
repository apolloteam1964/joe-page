import React, { useState } from "react";
import { connect } from "react-redux";
import { clearEntries, simulatedAddEntry } from "./hobbies";
import HobbyFormModal from "./components/HobbyFormModal";

import "./style.css";
import { AppContainer, Content, AddHobbyButton, Table, Header } from "./styles";

function App(props) {
  const [isHobbyFormOpen, setHobbyFormOpen] = useState(false);

  const { isSubmitting, entries, onAddEntry, onClearEntries } = props;

  const openHobbyForm = () => setHobbyFormOpen(true);
  const closeHobbyForm = () => setHobbyFormOpen(false);

  const handleSubmit = entry => {
    onAddEntry(entry);
    closeHobbyForm();
  };
  const handleClearEntries = () => onClearEntries();

  return (
    <AppContainer>
      <Content>
        <Header>
          <h1>Hobbies</h1>
          <AddHobbyButton isLoading={isSubmitting} onClick={openHobbyForm} />
        </Header>
        <HobbyFormModal
          key={entries.length}
          isOpen={isHobbyFormOpen}
          onClose={closeHobbyForm}
          onSubmit={handleSubmit}
        />
        {entries.length > 0 && (
          <section>
            <Table>
              <thead>
                <tr>
                  <th>Name</th>
                  <th>Hobbies</th>
                </tr>
              </thead>
              <tbody>
                {entries.map(entry => {
                  return (
                    <tr key={entry.addedOn}>
                      <td>
                        {entry.firstName} {entry.lastName}
                      </td>
                      <td>{entry.hobbies}</td>
                    </tr>
                  );
                })}
              </tbody>
            </Table>
            <button onClick={handleClearEntries}>Clear Entries</button>
          </section>
        )}
      </Content>
    </AppContainer>
  );
}

const mapStateToProps = state => ({
  isSubmitting: state.isSubmitting,
  entries: state.entries
});

const mapDispatchToProps = dispatch => ({
  onAddEntry: entry => dispatch(simulatedAddEntry(entry)),
  onClearEntries: () => dispatch(clearEntries())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
