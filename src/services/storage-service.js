export const storageService = {
    query,
    get,
}

function query(entityType) {
    var entities = JSON.parse(localStorage.getItem(entityType)) || []
    console.log('entities - storage service-query', entities);
    return Promise.resolve(entities)
}

function get(entityType, entityId) {
    console.log('entityId:', entityId);
    return query(entityType).then((entities) =>
        entities.find((entity) => entity.id === entityId)
    )
}